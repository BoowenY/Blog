import { Avatar, Divider } from "antd";
import "../static/style/components/author.css";

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        {" "}
        <Avatar
          size={100}
          src="https://i.loli.net/2021/01/09/yiWHCtjcuL78Fxh.jpg"
          className="photo"
        />
      </div>
      <div className="author-introduction">
        Only The Best Or Go Without
        <Divider className="social">社交账号</Divider>
        <a href="https://github.com/An-Ger">
          <Avatar
            src="https://i.loli.net/2021/01/09/tI3OZC2Av6xisF8.jpg"
            size={28}
            className="account-git"
          />
        </a>
        <a href="https://www.zhihu.com/people/An_Ger">
          <Avatar
            src="https://i.loli.net/2021/01/09/U6RzeQFPu8lmZyM.jpg"
            size={28}
            className="account-zh"
          />
        </a>
        <a href="https://wx3.sinaimg.cn/mw690/007D807Fly1gmhgvxvfeaj308307yq3h.jpg">
          <Avatar
            src="https://i.loli.net/2021/01/09/FfMiOLy5CIZewPm.jpg"
            size={28}
            className="account-wx"
          />
        </a>
      </div>
    </div>
  );
};

export default Author;
