import React, { useState } from "react";
import { Button, Form, Input, message, Switch } from "antd";
import NProgress from "nprogress";
import { areObjectsEqual } from "@/utils/tools";

const FormComponents = ({ finish }) => {
  const [form] = Form.useForm(); // 添加 form 实例
  const [prompt, setPrompt] = useState(false);

  const obj = {
    jinE: "1000000元",
    riQi: "2023年11月02日",
    quanCheng: "中国工商银行新加坡分行",
  };

  const onFinish = (values) => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
      if (areObjectsEqual(obj, values)) {
        finish();
        message.success("开证成功！");
      } else {
        message.error("信息填写错误，请按照合同内容或者提示信息填写！");
      }
    }, 1500);
  };
  //验证
  const formRules = (str = "此项信息不可为空") => [
    {
      required: true,
      message: str,
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", height: "92%", marginTop: "12px" }}>
      <div className="myScroll" style={{ width: "49%" }}>
        <Form
          form={form} // 添加 form 实例
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 500,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label={<h1>身份</h1>} name="username">
            <h1>开证申请人</h1>
          </Form.Item>
          <Form.Item label={<h1>身份</h1>} name="sad">
            <img
              style={{ height: "100%", width: "50%" }}
              src="https://tse3-mm.cn.bing.net/th/id/OIP-C.hV5Uo2H3l3IiYAr4QhmyAQHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
            />
          </Form.Item>
          <div></div>
          <Form.Item label="开证人全称" rules={formRules()} initialValue="段嘉许">
            <Input defaultValue={"段嘉许"} />
          </Form.Item>
          <Form.Item label="地址" rules={formRules()} initialValue="上海市宝山区134号">
            <Input defaultValue={"上海市宝山区134号"} />
          </Form.Item>
          <Form.Item label="邮编" rules={formRules()} initialValue="100033">
            <Input defaultValue={"100033"} />
          </Form.Item>
          <Form.Item label="账号" rules={formRules()} initialValue="6225365271562822">
            <Input defaultValue={"6225365271562822"} />
          </Form.Item>
          <Form.Item label="开户行" rules={formRules()} initialValue="中国工商银行">
            <Input defaultValue={"中国工商银行"} />
          </Form.Item>

          <Form.Item label={<></>}>
            <hr />
          </Form.Item>

          <Form.Item label={<h1>身份</h1>}>
            <h1>受益人</h1>
          </Form.Item>
          <Form.Item label={<h1>身份</h1>}>
            <img
              style={{ height: "100%", width: "50%" }}
              src="https://tse1-mm.cn.bing.net/th/id/OIP-C.5t5KdF7gjxGYc_Ls3o7c3AHaHq?w=183&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
            />
          </Form.Item>
          <div></div>
          <Form.Item label="受益人全称" rules={formRules()} initialValue="桑延">
            <Input defaultValue={"桑延"} />
          </Form.Item>
          <Form.Item label="地址" rules={formRules()} initialValue="新加坡佛士码头6号">
            <Input defaultValue={"新加坡佛士码头6号"} />
          </Form.Item>
          <Form.Item label="邮编" rules={formRules()} initialValue="048580">
            <Input defaultValue="048580" />
          </Form.Item>
          <Form.Item label="账号" rules={formRules()} initialValue="6225234234871235">
            <Input defaultValue="6225234234871235" />
          </Form.Item>
          <Form.Item label="开户行" rules={formRules()} initialValue="中国工商银行新加坡分行">
            <Input defaultValue={"中国工商银行新加坡分行"} />
          </Form.Item>
        </Form>
      </div>
      <div className="myScroll" style={{ width: "49%" }}>
        <Form
          form={form} // 添加 form 实例
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 500,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="开证金额（￥）" name="jinE" rules={formRules()}>
            <Input placeholder={prompt ? "1000000元" : ""} />
          </Form.Item>
          <Form.Item label="有效期/截止日期" name="riQi" rules={formRules()}>
            <Input placeholder={prompt ? "2023年11月02日" : ""} />
          </Form.Item>
          <Form.Item label="通知行全称" name="quanCheng" rules={formRules()}>
            <Input placeholder={prompt ? "中国工商银行新加坡分行" : ""} />
          </Form.Item>
          <Form.Item label="通知行地址" rules={formRules()} initialValue="新加坡佛士码头6号#23-01">
            <Input defaultValue={"新加坡佛士码头6号#23-01"} />
          </Form.Item>

          <Form.Item label="开启提示">
            <Switch
              onChange={(v) => {
                setPrompt(v);
              }}
            />
          </Form.Item>

          <Form.Item label="确定">
            <Button type="primary" htmlType="submit">
              上传
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormComponents;
