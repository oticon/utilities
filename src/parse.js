import _ from "lodash";

/**
 * flatten fn
 * @param obj
 * @returns {*}
 */
function flatten(obj) {
  const check = _.isPlainObject(obj) && _.size(obj) === 1;
  return check ? flatten(_.values(obj)[0]) : obj;
}

/**
 * parse
 * @param xml
 * @returns {*}
 */
function parse(xml) {
  let data = {};

  const isText = xml.nodeType === 3;
  const isElement = xml.nodeType === 1;

  const body = xml.textContent && xml.textContent.trim();
  const hasChildren = xml.childNodes && xml.childNodes.length;
  const hasAttributes = xml.attributes && xml.attributes.length;

  if (isText) {
    data.text = body;
  }

  if (!hasChildren && !hasAttributes) {
    return body;
  }

  if (isElement && hasAttributes) {
    data.attributes = _.reduce(
      xml.attributes,
      (obj, name, id) => {
        const attr = xml.attributes.item(id);
        obj[attr.name.toLowerCase()] = attr.value;
        return obj;
      }, {});
  }

  _.each(xml.childNodes, (child) => {
    const name = child.nodeName.toLowerCase();

    if (name === "#cdata-section") {
      data["text"] = child.textContent;
    } else {
      if (!_.has(data, name)) {
        data[name] = parse(child);
        return;
      }

      if (!_.isArray(data[name])) {
        data[name] = [data[name]];
      }

      data[name].push(parse(child));
    }
  });

  _.each(data.attributes, (value, key) => {
    if (data[key] !== null) {
      return;
    }

    data[key] = value;
    delete data.attributes[key];
  });

  if (_.isEmpty(data.attributes)) {
    delete data.attributes;
  }

  return flatten(data);
}

module.exports = parse;
