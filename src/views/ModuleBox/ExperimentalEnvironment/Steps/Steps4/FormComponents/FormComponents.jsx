import React, { useState } from "react";
import { Button, Form, Input, Spin, message, Switch } from "antd";
import { storedProcedures, areObjectsEqual } from "@/utils/tools";

const FormComponents = ({ finish }) => {
  const [form] = Form.useForm(); // 添加 form 实例
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState(false);

  const obj = {
    huoWuMingCheng: "巴西混合粉矿",
    huoWuPinZhong: "矿石",
    shuliang: "1000吨",
    dizhi: "上海市宝山区134号",
  };

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (areObjectsEqual(obj, values)) {
        message.success("审核成功！");
        finish();
        storedProcedures("进口商", "开证行", "申请开证流程", "第二步");
      } else {
        message.error("信息填写错误，请查看合同内容或者提示内容！");
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
          <Form.Item label="信用证类型" rules={formRules()}>
            <Input defaultValue={"跟单信用证"} />
          </Form.Item>

          <Form.Item label="受益人姓名" rules={formRules()}>
            <Input defaultValue={"桑延"} />
          </Form.Item>

          <Form.Item label="货物名称" name="huoWuMingCheng" rules={formRules()}>
            <Input placeholder={prompt ? "巴西混合粉矿" : ""} />
          </Form.Item>

          <Form.Item label="货物品种" name="huoWuPinZhong" rules={formRules()}>
            <Input placeholder={prompt ? "矿石" : ""} />
          </Form.Item>

          <Form.Item label="交货时间" rules={formRules()}>
            <Input defaultValue={"2023年10月10日"} />
          </Form.Item>

          <Form.Item label="有信用证效期" rules={formRules()}>
            <Input defaultValue={"2023年11月02日"} />
          </Form.Item>
        </Form>
      </div>
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
          <Form.Item label="总价" rules={formRules()}>
            <Input defaultValue={"1000000元"} />
          </Form.Item>
          <Form.Item label="地址" rules={formRules()}>
            <Input defaultValue={"新加坡佛士码头6号"} />
          </Form.Item>
          <Form.Item label="货物数量" name="shuliang" rules={formRules()}>
            <Input placeholder={prompt ? "1000吨" : ""} />
          </Form.Item>
          <Form.Item label="交货地址" name="dizhi" rules={formRules()}>
            <Input placeholder={prompt ? "上海市宝山区134号" : ""} />
          </Form.Item>
          <Form.Item label="是否委托保兑" rules={formRules()}>
            <Input defaultValue={"否"} />
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
      <div className="myScroll" style={{ width: "28%" }}>
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
            <img
              style={{ width: "90%" }}
              src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Mala_zh9WnA_FXQHgFwjRgHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
            />
            <h1 style={{ textAlign: "center" }}>开证行</h1>
          </Spin>
        </Form>
      </div>
    </div>
  );
};

export default FormComponents;
