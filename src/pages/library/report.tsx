import MiniHeader from "../../components/common/MiniHeader";
import Header from "../../components/common/Header";
import { useSession } from "next-auth/react";
import colors from "../../../styles";

const WeeklySugarData = {
  start: "23.01.17",
  end: "01.20",
  low: 0,
  common: 0,
  high: 4,
  data: [
    {
      day: "FRI",
      level: 3,
    },
    {
      day: "THU",
      level: 2,
    },
    {
      day: "WED",
      level: 0,
    },
    {
      day: "TUE",
      level: 1,
    },
  ],
};

const LowHighData = {
  best: [
    {
      id: 1,
      name: {
        title: "미니채소오믈렛",
        comment: "식탁에 다채로운 재미를",
      },
      image: "http://localhost:8000/media/default.jpg",
    },
    {
      id: 12,
      name: {
        title: "미니채소오믈렛",
        comment: "식탁에 다채로운 재미를",
      },
      image: "http://localhost:8000/media/default.jpg",
    },
    {
      id: 1,
      name: {
        title: "미니채소오믈렛",
        comment: "식탁에 다채로운 재미를",
      },
      image: "http://localhost:8000/media/default.jpg",
    },
  ],
  worst: [
    {
      id: 1,
      name: {
        title: "미니채소오믈렛",
        comment: "식탁에 다채로운 재미를",
      },
      image: "http://localhost:8000/media/default.jpg",
    },
    {
      id: 1,
      name: {
        title: "미니채소오믈렛",
        comment: "식탁에 다채로운 재미를",
      },
      image: "http://localhost:8000/media/default.jpg",
    },
    {
      id: 1,
      name: {
        title: "미니채소오믈렛",
        comment: "식탁에 다채로운 재미를",
      },
      image: "http://localhost:8000/media/default.jpg",
    },
  ],
};

export default function Report() {
  const session = useSession();

  return (
    <>
      <Header text="서재" />
      <MiniHeader
        left="식후 혈당 기록하기"
        right="주간레포트"
        leftURL="/library"
        rightURL="/library/report"
      />
      <div className="container">
        <div className="box">
          <div className="big-title">
            {session.data?.user.name}님의 <br />
            주간보고서 입니다
          </div>
          <div className="duration">
            {WeeklySugarData.start} ~ {WeeklySugarData.end}
          </div>
          <div className="explain">
            1주일간 식사 후 혈당을 기록하여 주간 분석 레포트를 발급 받아요!
          </div>
        </div>
        <div className="box">
          <div className="title">주간 혈당 요약</div>
          <div className="summary">
            <div className="summary-list">
              <div className="summary-item">저혈당 {WeeklySugarData.low}일</div>
              <div className="summary-item">
                정상혈당 {WeeklySugarData.common}일
              </div>
              <div className="summary-item">
                고혈당 {WeeklySugarData.high}일
              </div>
            </div>
            <div className="bar-graph">
              {WeeklySugarData.data.map((day, idx) => (
                <div key={idx} className={`bar-item level${day.level}`}>
                  {day.day}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="box">
          <div className="title"> 식후 혈당 낮았던 식단 TOP3</div>
          <div className="recipe-list">
            {LowHighData.best.map((meal, idx) => (
              <div key={idx}>
                <div>
                  {meal.name.comment} {meal.name.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box">
          <div className="title"> 식후 혈당 높았던 식단 TOP3</div>
          <div className="recipe-list">
            {LowHighData.worst.map((meal, idx) => (
              <div key={idx}>
                <div>
                  {meal.name.comment} {meal.name.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 390px;
          padding: 20px;
        }
        .box {
          margin-bottom: 16px;
        }
        .big-title {
          font-size: 24px;
          font-weight: 700;
        }
        .duration {
          color: ${colors.subTitle};
          font-weight: 500;
        }
        .explain {
          font-size: 12px;
          color: ${colors.subTitle2};
        }

        .title {
          font-weight: 700;
          font-size: 20px;
        }

        .summary {
          width: 350px;
          background-color: ${colors.grayBackground};
        }
        .summary-list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .bar-graph {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 6px;
        }
        .bar-item {
          display: flex;
          flex: 1;
          justify-content: center;
          color: ${colors.grayWhite};
        }
        .level0 {
          border: solid 1px ${colors.blackSub};
        }
        .level1 {
          background-color: ${colors.mainYellow};
        }
        .level2 {
          background-color: ${colors.mainOrange};
        }
        .level3 {
          background-color: ${colors.subRed};
        }
      `}</style>
    </>
  );
}
