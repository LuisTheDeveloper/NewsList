import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchNewsAction, setSaveListAction } from "../actions/index";
import { sortNews } from "../utils/globalfuncs";
import { Switch } from "./Switch";

export const NewsBitcoin = ({ article, getNews, news, setSaveList }) => {
  const [value, setValue] = useState(false);
  useEffect(
    () => {
      getNews(article);
    },
    [],
    article
  );

  if (news.current) sortNews(value, news.current);

  let list = news.saveList ? news.saveList : {};

  const handleClick = (id, author, title) => {
    let prop = id;
    list.hasOwnProperty(prop)
      ? delete list[prop]
      : (list[id] = `${author} : ${title}`);

    setSaveList(list);
  };

  return (
    <>
      <Switch isOn={value} handleToggle={() => setValue(!value)} />
      <table>
        <thead>
          <tr>
            <th>Save</th>
            <th style={{ background: value ? "#06D6A0" : "" }}>Author</th>
            <th style={{ background: value ? "" : "#808000" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {news.current &&
            news.current.map((article) => (
              <tr key={article.id}>
                <td>
                  {
                    <input
                      type="checkbox"
                      onClick={() =>
                        handleClick(article.id, article.author, article.title)
                      }
                    />
                  }
                </td>
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

const mapDispatchToProps = {
  getNews: fetchNewsAction,
  setSaveList: setSaveListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsBitcoin);
