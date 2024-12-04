import React, { useState } from "react";
import style from "./Steps13.module.scss";
import CountUp from "react-countup";
import { Button, Form, Input, message, Statistic } from "antd";
import NProgress from "nprogress";
import MyModal from "@/components/MyModal/MyModal";
import { areObjectsEqual, storedProcedures } from "@/utils/tools";
import CourseModal from "@/components/CourseModal/CourseModal";
import MyToken from "@/components/MyToken/MyToken";

const formatter = (value) => <CountUp end={value} separator="," />;

function Steps13() {
  // const [isNext, setIsNext] = useState(false);
  const [isNext1, setIsNext1] = useState(false);
  const obj = {
    dunShu: "980.00",
    tie: "61.35",
    liu: "0.05",
    gui: "2.18",
    lv: "1.61",
    lin: "0.07",
  };
  const [form] = Form.useForm(); // 添加 form 实例s
  const onFinish = (values) => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();

      if (areObjectsEqual(values, obj)) {
        message.success("交割成功！");
        setIsNext1(true);
        storedProcedures("进口商", "运货公司", "提货交割流程", "第八步");
      } else {
        message.error("交割失败，请重新计算！");
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
    <div className="pageBox">
      <div className="borderBox">
        <div className="mainBox">
          <p className="title">实验步骤八：提货交割流程1-2</p>{" "}
          <MyToken token={isNext1 ? "cn8ajs7v0k9amcu7s67" : "0amc73bd0k6aoa83bc7"} />
          <MyModal next1={isNext1} to="/experimentalEnvironment/steps14">
            <div className="modal">
              <div className="modalLef">
                <img
                  src="https://tse4-mm.cn.bing.net/th/id/OIP-C.vpKL0qHNehBTs7fDbZN8HgHaHZ?w=214&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt=""
                />
              </div>
              <div className="modalRig">
                <h1>实验流程八：提货交割</h1>
                <br></br>
                <p>在该场景中，学员将扮演进口商的角色，模拟提货交割的过程。以下是具体操作步骤</p>
                <p>1.点击“课程练习”，完成本流程的知识点练习题。</p>
                <p>
                  2.进口商获取银行提货单据，点击“获取”按钮，系统显示提货单据信息表，并返回“获取成功”。
                </p>
                <p>
                  3.然后点击“下一步”，即进口商去交割仓库进行盘点和交割，系统显示出实际送达三个仓库的货物吨数、含铁率、含硫率、含硅率、含铝率及含磷率等信息，请根据这些的信息，分别计算出其综合值（计算结果保留两位小数），并填入输入框内，点击“提交”。
                </p>
                <p>
                  其中，综合值为三个仓库数值的加权平均值，如：综合含铁率计算为 (300 * 60.5% + 400 *
                  61.2% + 200 * 62.1%) / (300 + 400 + 280) = 61.35%.
                </p>
                <p>完成以上步骤后，请点击“下一步”进入下一个实验环节。</p>
              </div>
            </div>
          </MyModal>
          <div className={style.content}>
            <div>
              <img
                src="https://tse4-mm.cn.bing.net/th/id/OIP-C.X09p4FKQYztafdu-aC9dHgHaHa?w=163&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
              <div className={style.desc}>
                <div>
                  <Statistic
                    title="吨数"
                    value={300}
                    suffix="T"
                    valueStyle={{ fontSize: "22px" }}
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含铁率"
                    value={60.5}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含硫率"
                    value={0.055}
                    precision={3}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含硅率"
                    value={2.3}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含铝率"
                    value={1.5}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含磷率"
                    value={0.08}
                    precision={3}
                    suffix="%"
                  />
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://tse4-mm.cn.bing.net/th/id/OIP-C.X09p4FKQYztafdu-aC9dHgHaHa?w=163&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
              <div className={style.desc}>
                <div>
                  <Statistic
                    title="吨数"
                    value={400}
                    suffix="T"
                    valueStyle={{ fontSize: "22px" }}
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含铁率"
                    value={61.2}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含硫率"
                    value={0.048}
                    precision={3}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含硅率"
                    value={2.1}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含铝率"
                    value={1.6}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含磷率"
                    value={0.06}
                    precision={2}
                    suffix="%"
                  />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="https://tse4-mm.cn.bing.net/th/id/OIP-C.X09p4FKQYztafdu-aC9dHgHaHa?w=163&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
              <div className={style.desc}>
                <div>
                  <Statistic
                    title="吨数"
                    value={280}
                    suffix="T"
                    valueStyle={{ fontSize: "22px" }}
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含铁率"
                    value={62.1}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含硫率"
                    value={0.052}
                    precision={3}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含硅率"
                    value={2.4}
                    precision={3}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含铝率"
                    value={1.7}
                    precision={2}
                    suffix="%"
                  />
                </div>
                <div>
                  <Statistic
                    valueStyle={{ fontSize: "22px" }}
                    title="含磷率"
                    value={0.09}
                    precision={3}
                    suffix="%"
                  />
                </div>
              </div>
            </div>
            <div className="myScroll" style={{ padding: "12px" }}>
              <Form
                form={form} // 添加 form 实例
                labelCol={{
                  span: 12,
                }}
                wrapperCol={{
                  span: 11,
                }}
                style={{
                  maxWidth: 300,
                }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <h1 style={{ margin: "12px 0" }}>提货计算器(保留两位小数)</h1>
                <Form.Item label="总吨数(T)" name="dunShu" rules={formRules()}>
                  <Input />
                </Form.Item>
                <Form.Item label="综合含铁率(%)" name="tie" rules={formRules()}>
                  <Input />
                </Form.Item>
                <Form.Item label="综合含硫率(%)" name="liu" rules={formRules()}>
                  <Input />
                </Form.Item>
                <Form.Item label="综合含硅率(%)" name="gui" rules={formRules()}>
                  <Input />
                </Form.Item>
                <Form.Item label="综合含铝率(%)" name="lv" rules={formRules()}>
                  <Input />
                </Form.Item>
                <Form.Item label="综合含磷率(%)" name="lin" rules={formRules()}>
                  <Input />
                </Form.Item>

                <Form.Item label="确定">
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps13;
