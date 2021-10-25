export type User = { firstName: string; lastName: string };
export type Users = User[];

export type CodeUser = { lovesTech: boolean; worksHard: boolean; name: string };

export type Adult = { age: number };
export type Adults = Adult[];

export type CartItem = { name: string; price: number };
export type Cart = CartItem[];

export type MenuItem = { name: string; price: number; rating: number };
export type Menu = MenuItem[];

export type Employee = { name: string; salary: number };
export type Employees = Employee[];

export type CreditScore = number;
export type CreditScores = CreditScore[];

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Interests = {
  foods: {
    sweets: {
      iceCream: {
        favoriteFlavor: string;
      };
    };
  };
};

export type EmployeeData = {
  name: string;
  username: string;
  avatar: string;
  email: string;
  dob: string;
  phone: string;
  address: Address;
  website: string;
  company: Company;
  interests: Interests;
};

export type EmployeesDatas = EmployeeData[];
