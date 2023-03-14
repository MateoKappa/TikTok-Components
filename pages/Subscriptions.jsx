import React from "react";
import styles from "../styles/subscription.module.scss";
function Subscriptions() {
  let perksOne = [
    "Monthly limit of 500 users",
    "Monthly limit of 1000 orders",
    "Basic tools",
    "Email support",
  ];
  let perksTwo = [
    "Monthly limit of 1000 users",
    "Monthly limit of 5000 orders",
    "Advanced Managment Tools",
    "Phone and Email support",
    "Intergration with other systems",
  ];
  let perksThree = [
    "Monthly limit of 1000 users",
    "Monthly limit of 5000 orders",
    "Advanced Managment Tools",
    "Customizable dashboards",
    "Phone and Email support",
    "Intergration with other systems",
  ];
  let perksFour = [
    "Unlimited users",
    "Unlimite dorders",
    "Advanced Managment Tools",
    "Customizable dashboards/features",
    "24/7 priority support",
    "Advanced reporting and analytics",
    "Intergration with other systems",
  ];
  const Default_sub = ({ stars, money, plan, planPerks, perks, custom }) => {
    let array = [];
    for (let i = 0; i < stars; i++) {
      array.push(i);
    }
    return custom ? (
      <div className={styles.container}>
        <div className={styles.star}>
          {array.map((index) => (
            <div>
              <i
                style={
                  index >= 1
                    ? {
                        marginLeft: "-17.5px",
                        zIndex: { index },
                        opacity: `calc(1 - ${index}  / 4)`,
                      }
                    : null
                }
                class="fa-solid fa-star"
              ></i>
            </div>
          ))}

          <p>{plan}</p>
        </div>
        <h2>${money}/month</h2>
        <button>Επιλογη Πλανου</button>
        <h5>{planPerks}</h5>
        {perks?.map((perk, index) => (
          <div className={styles.perks}>
            <i class="fa-sharp fa-solid fa-circle-check"></i> <h6> {perk}</h6>
          </div>
        ))}
      </div>
    ) : (
      <div className={styles.customContainer}></div>
    );
  };
  return (
    <div className={styles.defaults}>
      {" "}
      <Default_sub
        stars={1}
        money="0,00"
        plan="Free Plan"
        planPerks="Free Plan Perks"
        perks={perksOne}
      />
      <Default_sub
        stars={2}
        money="5,00"
        plan="Starter Plan"
        planPerks="Starter Plan Perks"
        perks={perksTwo}
      />
      <Default_sub
        stars={3}
        money="20,00"
        plan="Plus Plan"
        planPerks="Plus Plan Perks"
        perks={perksThree}
      />
      <Default_sub
        stars={{}}
        money="50,00"
        plan="Pro Plan"
        planPerks="Pro Plan Perks"
        perks={perksFour}
        custom={true}
      />
    </div>
  );
}

export default Subscriptions;
