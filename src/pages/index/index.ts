import { JSON, JSONObject } from "waft-json";
import { console, getDataSource, Page, Props, Event, MessageEvent, setTimeout, window, document,history } from "waft";
export class Index extends Page {
  constructor(props: Props) {
    super(props);
    // 设置默认的state
    this.setState(getDataSource());
  }

  toDetail(e:Event):void {
    console.log("tod");
    const query = new JSONObject();
    query.set("id", 123);
    // query可以省略 或用 null 或 new JSONObject()
    history.pushState({url:'pages/detail/index', query: query ,dataSource:query});
  }
}