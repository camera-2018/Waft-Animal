import { JSON, JSONObject } from "waft-json";
import { console, getDataSource, Page, Props, Event, history,document} from "waft";
let _this: Detail;
export class Detail extends Page {
  constructor(props: Props){
    super(props);
    // 设置默认的state
    this.setState(getDataSource());
  }
  goBack(e: Event):void {
    history.goBack();
  }
  toIndex(e:Event): void {
    console.log("toi");
    const query = new JSONObject();
    query.set("id", 1234);
    history.pushState({url:'pages/index/index', query: query ,dataSource:query});
  }
  
}