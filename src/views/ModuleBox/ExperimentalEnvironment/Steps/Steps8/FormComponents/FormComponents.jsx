import React, { useState } from "react";
import { Button, Form, Input, Spin, message, Card, Switch } from "antd";
import { areObjectsEqual } from "@/utils/tools";

const FormComponents = ({ finish }) => {
  const [form] = Form.useForm(); // 添加 form 实例
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState(false);
  const [tokenShow, setTokenShow] = useState(false);

  const obj = {
    mingCheng: "新加坡货运",
    zhongLei: "矿石",
    haoMa: "34545646747",
  };

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (areObjectsEqual(values, obj)) {
        setTokenShow(true);
        finish();
        message.success("审核成功！");
      } else {
        message.error("信息提交失败，请按照合同内容或者提示内容填写！");
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
    <div
      style={{ display: "flex", flexWrap: "nowrap", height: "92%", marginTop: "12px", gap: "4px" }}
    >
      <div className="myScroll" style={{ width: "36%" }}>
        <Form
          form={form} // 添加 form 实例
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 400,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="申请人" rules={formRules()} initialValue="桑延">
            <Input defaultValue="桑延" />
          </Form.Item>

          <Form.Item label="运货公司名称" name="mingCheng" rules={formRules()}>
            <Input placeholder={prompt ? "新加坡货运" : ""} />
          </Form.Item>

          <Form.Item label="发货人" rules={formRules()} initialValue="钱飞">
            <Input defaultValue="钱飞" />
          </Form.Item>

          <Form.Item label="支付金额" rules={formRules()} initialValue="1000000元">
            <Input defaultValue="1000000元" />
          </Form.Item>

          <Form.Item label="货物种类" name="zhongLei" rules={formRules()}>
            <Input placeholder={prompt ? "矿石" : ""} />
          </Form.Item>

          <Form.Item label="货物数量" rules={formRules()} initialValue="1000吨">
            <Input defaultValue="1000吨" />
          </Form.Item>

          <Form.Item label="签发人" rules={formRules()} initialValue="桑延">
            <Input defaultValue="桑延" />
          </Form.Item>
        </Form>
      </div>
      <div className="myScroll" style={{ width: "35%" }}>
        <Form
          form={form} // 添加 form 实例
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 400,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="付款申请日期" rules={formRules()} initialValue="2023年08月23日">
            <Input defaultValue="2023年08月23日" />
          </Form.Item>
          <Form.Item label="地址" rules={formRules()} initialValue="新加坡佛士码头6号">
            <Input defaultValue="新加坡佛士码头6号" />
          </Form.Item>
          <Form.Item label="联系方式" rules={formRules()} initialValue="17335548909">
            <Input defaultValue="17335548909" />
          </Form.Item>
          <Form.Item label="装运日期" rules={formRules()} initialValue="2023年08月23日">
            <Input defaultValue="2023年08月23日" />
          </Form.Item>
          <Form.Item label="提单号码" name="haoMa" rules={formRules()}>
            <Input placeholder={prompt ? "34545646747" : ""} />
          </Form.Item>
          <Form.Item label="货物状态" rules={formRules()} initialValue="正常">
            <Input defaultValue="新加坡佛士码头6号" />
          </Form.Item>
          <Form.Item
            label="签发地"
            name="sdasdasd"
            rules={formRules()}
            initialValue="新加坡佛士码头6号"
          >
            <Input defaultValue="新加坡佛士码头6号" />
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
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="myScroll" style={{ width: "28%", padding: "8px" }}>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 400,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Spin spinning={loading} tip="正在审核" size="large">
            <div style={{ textAlign: "center" }}>
              <img
                style={{ width: "40%" }}
                src="https://tse2-mm.cn.bing.net/th/id/OIP-C.vpHwwmyUEjK3KyQ_AdUjRwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </div>

            <h1 style={{ textAlign: "center" }}>议付行</h1>
            <br />
            <hr />
            <br />
            <Card title="请在这里查看token" bordered={false}>
              {tokenShow ? "token：9dbf93nlknda92qoihd" : <del>token:ma9fj395a0am0ash7t6</del>}
            </Card>
          </Spin>
        </Form>
      </div>
    </div>
  );
};

export default FormComponents;
