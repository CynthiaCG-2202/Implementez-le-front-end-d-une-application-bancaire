import FeatureItem from "./Featuresitems";
import chatIcon from "../assets/Images/icon-chat.png";
import moneyIcon from "../assets/Images/icon-money.png";
import securityIcon from "../assets/Images/icon-security.png";

function Features() {
  return (
    <section className="features">
      <FeatureItem
        icon={chatIcon}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        icon={moneyIcon}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        icon={securityIcon}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default Features;
