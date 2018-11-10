import { AssertAssignable } from "../util";

type Foo = Protein | EntreeType;

/* Monster Foodies Food Truck Menu
Taco....................$5
  Protein
    Chicken
    BBQ jackfruit
    Carnitas (+$2)
    Salsa (+$0.50)
  Add a second taco for +$3 (+$4 for Carnitas)
Sushi ..................$8
  Protein    
    Tuna
    King Salmon (+$2)
  Rice
    White Rice
    Brown Rice (+$1) 
Sandwich................$4
  Protein
    Chicken
    BBQ Jackfruit
    Portabello Cap (+$2)
  Optional 1 topping, extra toppings +$0.50
    Cheese
    Lettuce
    Tomato
Add AwesomeSauce to anything for $1!
*/

type Chicken = "chicken";
type Jackfruit = "jackfruit";
type Tuna = "tuna";

// Pricey Proteins cost $2
type Carnitas = "carnitas";
type kingSalmon = "kingSalmon";
type portabelloCap = "portabelloCap";

export type Protein =
  | Chicken // 🐓
  | Jackfruit // 🍈
  | Tuna // 🐟

  // Pricey Proteins cost $2
  | Carnitas // 🐖
  | kingSalmon // 🐟
  | portabelloCap; // 🍄

export type TacoProtein = Chicken | Jackfruit | Carnitas;

export type SushiProtein = Tuna | kingSalmon;

export type SandwichProtein = Chicken | Jackfruit | portabelloCap;

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🥗
  | "tomato"; // 🍅

export type RiceType =
  | "brownRice" // 🍘
  | "whiteRice"; // 🍙

export type Taco = {
  protein: TacoProtein;
  type: "taco";
  salsa: boolean;
  extraTaco: boolean;  // extraTaco is true if this is the extra taco
}

export type Sushi = {
  protein: SushiProtein;
  type: "sushi";
  riceType: RiceType;
}

export type Sandwich = {
  type: "sandwich";
  protein: Protein;
  toppings: Topping[];
}

export type EntreeType =
  | "taco" // 🌮
  | "sushi" // 🍣
  | "sandwich"; // 🍞

/*
 * ======================================================
 * TODO: Update LineItem to represent an order from the
 * Monster Foodies Truck.
 * ======================================================*/

export type LineItem = (Taco | Sushi | Sandwich) & {awesomeSauce: boolean};  // update later with more details

export interface Order {
  lineItems: LineItem[];
}

/*
 * ======================================================
 * TODO: Implement priceOrder. Take an order and get its cost
 * ======================================================*/
export function priceOrder(order: Order): number {
  for (var line_item in order.lineItems) { // todo: better syntax
    let price: number = 0;
    if (line_item.type === "taco") { // not a string
      price += 5;

    }
  }
  return 1;
}

/* Monster's foodie truck takes orders on paper slips, 
   but sometimes people don't read the menu before they
   order. */
type PaperLineItem = {
  type: EntreeType;
  protein: Protein;
  awesomeSauce: boolean;
  extraTaco?: boolean;
  riceType?: RiceType;
  salsa?: boolean;
  toppings?: Topping[];
};

type _t1 = AssertAssignable<PaperLineItem, LineItem>;
