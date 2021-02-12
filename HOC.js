import "./styles.css";

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

function Loader({ children, isLoading }) {
  if (isLoading) return "is loading";

  return children;
}

function withYearsLeftToLive(WrappedComponent) {
  const HOComponent = (props) => {
    return (
      <WrappedComponent
        yearsLeft={props.additionalInfo.smokes ? 20 : 50}
        {...props}
      />
    );
  };
  HOComponent.displayName = "withYearsLeftToLive";
  return HOComponent;
}

function withAdditionalUserInfo(WrappedComponent) {
  const additionalInfo = { adress: "Zolyno g. 13", smokes: false };
  const HOComponent = (props) => {
    return <WrappedComponent additionalInfo={additionalInfo} {...props} />;
  };
  return HOComponent;
}

function User({ additionalInfo, yearsLeft, onClick }) {
  const basicUserDetails = {
    name: "Jonas",
    surname: "Jonaitis"
  };
  return (
    <div onClick={onClick}>
      {basicUserDetails.name}
      {basicUserDetails.surname}
      {additionalInfo &&
        Object.keys(additionalInfo).map((key) => (
          <p key={key}>{additionalInfo[key]}</p>
        ))}
      {yearsLeft}
    </div>
  );
}

export const UserComposed = compose(
  withAdditionalUserInfo,
  withYearsLeftToLive
)(User);

// export const UserComposed = withAdditionalUserInfo(withYearsLeftToLive(User));

export default function App() {
  return (
    <Loader isLoading={false}>
      <UserComposed onClick={() => console.log("abc")} />
    </Loader>
  );
}
