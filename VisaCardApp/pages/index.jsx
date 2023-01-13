import styles from "../styles/index.module.scss";
import {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
export default function Home() {
  const [side, setSide] = useState(true);
  const [shadow, setShadow] = useState("boxShadow");
  const [shadowOn, setShadowOn] = useState(false);
  const [names, setNames] = useState([]);
  const [digitsCard, setDigitsCard] = useState([
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
  ]);
  const [cvv, setCvv] = useState([]);
  const [expMonth, setExpMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [nameLength, setNameLength] = useState(0);
  let digits = [
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
    ["#"],
  ];

  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let years = [
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
  ];
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = shadow;
  }, [shadow]);

  return (
    <div className={styles.page}>
      <div className={styles.cardContainer}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            onClick={() => setSide(!side)}
            className={styles.card}
            key={side}
            animate={{transform: " rotateY(0deg)"}}
            initial={{transform: " rotateY(90deg)"}}
            transition={{type: "none", duration: 0.1}}
            exit={{
              transform: " rotateY(90deg)",
              transition: {
                duration: "0.3",
              },
            }}
          >
            {side && shadowOn ? (
              <motion.div
                onClick={() => {
                  console.log(previousValue.current, shadow);
                }}
                initial={
                  previousValue.current == "boxShadow"
                    ? {
                        top: "calc(50% - 25px)",
                        left: 25,
                        width: 395,
                      }
                    : previousValue.current == "cardHolder"
                    ? {
                        top: 187,
                        left: 25,
                        width: `calc(${nameLength}*10npx + 110px)`,
                      }
                    : {
                        top: 187,
                        left: 337,
                        width: 85,
                      }
                }
                animate={
                  shadow == "boxShadow"
                    ? {
                        top: "calc(50% - 25px)",
                        left: 25,
                        width: 395,
                      }
                    : shadow == "cardHolder"
                    ? {
                        top: 187,
                        left: 25,
                        width: `calc(${nameLength}*10px + 110px)`,
                      }
                    : {
                        top: 187,
                        left: 350,
                        width: 85,
                      }
                }
                transition={{type: "none"}}
                style={{
                  height: 50,
                  backgroundColor: "rgba(0, 0, 0, 0.281)",
                  position: "absolute",
                  width:
                    shadow == "boxShadow"
                      ? 395
                      : shadow == "cardHolder"
                      ? 195
                      : 85,
                  border: "2px solid rgba(255, 217, 0, 0.644)",
                  zIndex: -1,
                }}
                key={shadow}
              ></motion.div>
            ) : null}

            {side ? (
              <>
                <img id="chip" src="/chip.png" />
                <img src="/logo.png" id="front" />
                <div className={styles.digits}>
                  {digitsCard?.map((digit, index) => (
                    <motion.div
                      className={styles.spaces}
                      key={digits}
                      transition={{type: "none"}}
                      id={index}
                    >
                      {digit == "#" ? (
                        <>#</>
                      ) : (
                        <motion.div
                          key={index}
                          initial={{y: 20, color: "rgba(255, 255, 255, 1)"}}
                          animate={{y: 0, color: "rgba(255, 255, 255, 1)"}}
                          transition={{duration: 0.2, type: "none"}}
                          style={{color: "rgba(255, 255, 255, 0.622)"}}
                        >
                          {digit}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className={styles.name}>
                  <h5>Card Holder</h5>{" "}
                  <h4>
                    {" "}
                    <div className={styles.fullName}>
                      {names.length == 0 ? (
                        "FULL NAME"
                      ) : (
                        <AnimatePresence exitBeforeEnter>
                          {names?.map((name, index) => (
                            <motion.div
                              className={styles.spaces}
                              key={name}
                              initial={{y: 100}}
                              animate={{y: 0}}
                              transition={{type: "none"}}
                              id={name == " " ? "space" : index}
                            >
                              {name}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      )}
                    </div>
                  </h4>
                </div>
                <div className={styles.expires}>
                  <h5>Expires</h5>
                  <div className={styles.expiresDate}>
                    {expMonth == "" && year == "" ? (
                      "MM/YY"
                    ) : (
                      <>
                        <motion.h4
                          initial={{y: 200}}
                          animate={{y: 0}}
                          transition={{type: "none"}}
                          key={expMonth}
                        >
                          {expMonth}
                        </motion.h4>{" "}
                        /{" "}
                        <motion.h4
                          initial={{y: 200}}
                          animate={{y: 0}}
                          transition={{type: "none"}}
                          key={year}
                        >
                          {year}
                        </motion.h4>{" "}
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.black}></div>
                <h5 id="back">CVV</h5>
                <div className={styles.cvv}>
                  {cvv?.map((cvv, index) => (
                    <motion.div
                      className={styles.spaces}
                      key={index}
                      initial={{y: 20}}
                      animate={{y: 0}}
                      transition={{type: "none", duration: 0.2}}
                      id={index}
                    >
                      *
                    </motion.div>
                  ))}
                </div>
                <div className={styles.white}></div>

                <img src="/logo.png" id="back" />
              </>
            )}
          </motion.div>
        </AnimatePresence>
        <div className={styles.card_Num_Holder}>
          <h5>Card Number</h5>
          <input
            type="tel"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            maxlength="16"
            onClick={() => {
              setShadow("boxShadow"), setShadowOn(true);
            }}
            onChange={(e) => {
              let Array = [...e.target.value];
              {
                Array.map((arrayChilds, index) => {
                  let lastdigit = Array[index];
                  digits[index].shift();
                  digits[index].unshift(lastdigit);
                });
              }
              setDigitsCard(digits);
            }}
          ></input>
        </div>
        <div className={styles.card_Num_Holder}>
          <h5>Card holder</h5>
          <input
            onClick={() => {
              setShadow("cardHolder"), setShadowOn(true);
            }}
            onChange={(e) => {
              let usingSpread = [...e.target.value.toUpperCase()];
              {
                usingSpread.length > 9
                  ? setNameLength(usingSpread.length - 8)
                  : null;
              }

              setNames(usingSpread);
            }}
          ></input>
        </div>
        <div
          className={styles.date_cvv}
          onClick={() => {
            setShadow("expires"), setShadowOn(true);
          }}
        >
          <div className={styles.details}>
            <h5>Expiration Month</h5>
            <select
              onChange={(e) => {
                {
                  e.target.value < 10
                    ? setExpMonth("0" + e.target.value.toString())
                    : setExpMonth(e.target.value);
                }
              }}
            >
              {months.map((month, index) => (
                <option value={month[index]}>{month}</option>
              ))}
            </select>
          </div>
          <div className={styles.details}>
            <h5> Year</h5>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setYear(e.target.value);
              }}
            >
              {years.map((year, index) => (
                <option value={years[index]}>{year}</option>
              ))}
            </select>
          </div>

          <div className={styles.details}>
            {" "}
            <h5>CVV</h5>{" "}
            <input
              onClick={() => setSide(!side)}
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="3"
              onChange={(e) => {
                let usingSpread = [...e.target.value];
                setCvv(usingSpread);
              }}
            />
          </div>
        </div>
        <button>Sumbit</button>
      </div>
    </div>
  );
}
