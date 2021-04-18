import React from "react";
import { connect } from "react-redux";
import {
  isArrayWithValues,
  isObjectWithKeysAndValues,
} from "../utils/globalfuncs";

export const SaveList = ({ news }) => {
  let list = "";

  const savedList = isObjectWithKeysAndValues(news.saveList)
    ? Object.values(news.saveList)
    : null;

  if (isArrayWithValues(savedList)) {
    list = savedList.map((item) => {
      const container = {};
      const pos = item.indexOf(":");
      container["author"] = item.substring(0, pos - 1);
      container["title"] = item.substring(pos + 1);
      return container;
    });
  }

  return (
    <>
      <table>
        <caption>" "</caption>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((article, id) => (
              <tr key={id}>
                <td>{article.author}</td>
                <td>{article.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export const mapStateToProps = (state) => ({
  news: state,
});

export default connect(mapStateToProps)(SaveList);
