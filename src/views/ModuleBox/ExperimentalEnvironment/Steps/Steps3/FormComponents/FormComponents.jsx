import React, { useState } from "react";
import { Button, Form, Input, message, Switch } from "antd";

import { areObjectsEqual } from "@/utils/tools";
import NProgress from "nprogress";

const FormComponents = ({ finish }) => {
  const [form] = Form.useForm(); // 添加 form 实例

  const [prompt, setPrompt] = useState(false);

  const obj = {
    mai1: "上海高新科技创业发展有限公司",
    mai2: "新加坡森润环保节能技术有限公司",
    mingCheng: "巴西混合粉矿",
    shuLiang: "1000吨",
    pinZhong: "矿石",
    jinE: "1000000元",
    diDian: "上海市宝山区134号",
    fangShi: "信用证",
  };

  const onFinish = (values) => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
      if (areObjectsEqual(values, obj)) {
        message.success("上传成功！");
        finish();
      } else {
        message.error("信息错误，请严格按照合同内容填写！");
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
      <div className="myScroll" style={{ width: "37%" }}>
        <Form
          form={form} // 添加 form 实例
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 15,
          }}
          style={{
            maxWidth: 400,
          }}
          onFinish={onFinish}
          autoComplete="on"
        >
          <Form.Item label="买方" name="mai1" rules={formRules()}>
            <Input placeholder={prompt ? "上海高新科技创业发展有限公司" : ""} />
          </Form.Item>

          <Form.Item label="卖方" name="mai2" rules={formRules()}>
            <Input placeholder={prompt ? "新加坡森润环保节能技术有限公司" : ""} />
          </Form.Item>

          <Form.Item
            label="货物名称"
            name="mingCheng"
            rules={formRules()}
            initialValue="巴西混合粉矿"
          >
            <Input />
          </Form.Item>

          <Form.Item label="货物数量" name="shuLiang" rules={formRules()} initialValue="1000吨">
            <Input />
          </Form.Item>

          <Form.Item label="货物品种" name="pinZhong" rules={formRules()}>
            <Input placeholder={prompt ? "矿石" : ""} />
          </Form.Item>

          <Form.Item label="确定">
            <Button type="primary" htmlType="submit">
              提交
            </Button>
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
          <Form.Item label="合同金额" name="jinE" rules={formRules()} initialValue="1000000元">
            <Input />
          </Form.Item>
          <Form.Item label="交货地点" name="diDian" rules={formRules()}>
            <Input placeholder={prompt ? "上海市宝山区134号" : ""} />
          </Form.Item>
          <Form.Item label="贷款支付方式" name="fangShi" rules={formRules()} initialValue="信用证">
            <Input />
          </Form.Item>
          <Form.Item label="开启提示">
            <Switch
              onChange={(v) => {
                setPrompt(v);
              }}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="myScroll" style={{ width: "26%" }}>
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
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.2fRnJvPNwnmSMBTT-YwRkgHaHP?w=211&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </Form>
      </div>
    </div>
  );
};

export default FormComponents;
