import { useSpring } from "react-spring";

/**
 * 从路径中提取特定值用作侧边栏持久化展开
 * @param {string} path - 路径字符串
 * @returns {string} - 提取的值
 */
export const extractValueFromPath = (path) => {
  const startIndex = path.indexOf("/") + 1; // 找到第一个斜杠的索引，并加1
  const endIndex = path.indexOf("/", startIndex); // 从 startIndex 开始找到第二个斜杠的索引

  if (endIndex !== -1) {
    // 如果存在第二个斜杠
    return "/" + path.substring(startIndex, endIndex); // 提取 startIndex 到 endIndex 之间的部分作为值
  } else {
    return "/" + path.substring(startIndex); // 如果没有第二个斜杠，则提取 startIndex 到结尾的部分作为值
  }
};

/**
 * 根据数据生成columns
 * @param {Array} data - 数据
 * @returns {Array} - 列
 */
export const generateColumnsFromData = (data) => {
  if (data.length === 0) {
    return [];
  }
  const sampleItem = data[0];
  const keys = Object.keys(sampleItem);

  // 生成columns
  const generatedColumns = keys.map((key) => {
    return {
      title: key, // 列标题使用字段名
      dataIndex: key, // 列数据使用字段名
      key: key,
    };
  });

  return generatedColumns;
};

/**
 * 获取当前路由
 * @param {String} str - 当前全部路由location.pathname
 * @returns {String} - 处理后的路由
 */
export const getSubstringAfterSlash = (str) => {
  if (str === "/") return "home";
  const slashCount = (str.match(/\//g) || []).length;

  if (slashCount === 1) {
    const index = str.indexOf("/");
    return str.substring(index + 1);
  } else if (slashCount >= 2) {
    const firstIndex = str.indexOf("/");
    const secondIndex = str.indexOf("/", firstIndex + 1);
    if (slashCount === 2) {
      return str.substring(secondIndex + 1);
    } else {
      const thirdIndex = str.indexOf("/", secondIndex + 1);
      return str.substring(secondIndex + 1, thirdIndex);
    }
  }

  return "";
};

/**
 * 执行动画函数
 * @param {number | string} left - 往左移动的px
 * @param {number | string} top - 往右移动的px
 * @param {boolean} isVisible - 是否执行动画
 * @returns {object} - 样式对象
 */
export const animationFn = (left = 280, top = 0, isVisible) => {
  const animation = useSpring({
    from: {
      display: "none",
      opacity: 0,
      left: 0,
      top: 0,
      zIndex: "999",
      transform: "translate(0px, 0px)",
    },
    to: async (next) => {
      if (isVisible) {
        await next({
          display: "block",
          opacity: 1,
          transform: `translate(${left}px, ${top}px)`,
        });
        await next({
          opacity: 0,
          transform: `translate(${left}px, ${top}px)`,
        });
        await next({
          display: "none",
        });
      }
    },
    config: { duration: 1500 },
  });
  return animation;
};

/**
 * 判断两个对象的属性值是否相等
 * @param {Object} obj1 - 对象一
 * @param {Object} obj2 - 对象二
 * @returns {Boolean} 是否相等
 */
export const areObjectsEqual = (obj1, obj2) => {
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

/**
 * 记录每一步的详情
 * @param {*} jia - 甲方
 * @param {*} yi  - 乙方
 * @param {*} evt - 事件名
 * @param {*} amount - 金额
 * @param {*} token  - token
 * @returns
 */
export const storedProcedures = (
  jia,
  yi,
  evt,
  index,
  amount = "本次无金额交付",
  token = "本次无token验证"
) => {
  const data = JSON.parse(sessionStorage.getItem("allSteps"));
  const newEvt = data?.filter((v) => v.evt.includes(evt));
  if (!newEvt?.length) {
    console.log("执行");
    return sessionStorage.setItem(
      "allSteps",
      JSON.stringify([
        ...(data ? data : []),
        {
          key: Date.now(),
          index,
          jia,
          yi,
          time: `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          evt,
          amount,
          token,
        },
      ])
    );
  }
};
