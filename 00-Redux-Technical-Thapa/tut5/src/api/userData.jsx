import Chance from "chance";

const chance = Chance()

const fakeUserData = () => {
  return chance.name({ middle: true })
}

export default fakeUserData