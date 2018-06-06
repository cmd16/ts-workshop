import {
  QuickSnackOrder,
  WholeEnchiladaOrder,
  ClassicDinnerOrder,
  Salad,
  Entree,
  DinnerWithDessert,
  Dessert,
  AmuseBouche,
  Appetizer
} from "../chez-eclectic";
import { assembleTakeaway, Takeaway, JackOrderType, jackSavedCourse, JackSavedCourseType } from "./code";
import { AssertAssignable } from "../util";

const jillOrder: ClassicDinnerOrder = {
  salad: Salad.Fattoush,
  entree: Entree.Curry
};

/*

Jack and Jill went up the hill to have dinner at Chez Eclectic.

Jack and Jill love midnight snacks, so they've agreed ahead of time
to save their salad courses immediately to take as leftovers so
they have late night munchies.

Define an object type Takeaway with two fields that can hold Jack and Jill's salads for
them to take home after dinner.

And define a function assembleTakeaway that takes their orders and boxes them up.
*/
it("6.1", () => {
  // Comment out this test after making it pass.
  const jackOrder: ClassicDinnerOrder = {
    salad: Salad.Caesar,
    entree: Entree.Lasagna
  };

  type _1 = AssertAssignable<Salad, Takeaway['jack']>
  type _2 = AssertAssignable<Salad, Takeaway['jill']>

  expect(assembleTakeaway(jackOrder, jillOrder)).toEqual({
    jack: Salad.Caesar,
    jill: Salad.Fattoush
  })

  // Comment out this test before moving on.
});


/*

Jack is having a hard time deciding what he wants. Jill is getting
tired of having to modify assembleTakeaway every time he changes his mind.

The most direct way to do this in TypeScript is to take advantage of structural typing.

Update assembleTakeaway so that it can accept any dinner type which includes a salad.
*/
// test("6.2", () => {
//   let jackOrder: DinnerWithDessert = {
//     salad: Salad.Caesar,
//     entree: Entree.Lasagna,
//     dessert: Dessert.FlourlessChocolateCake
//   };
//   let jillOrder: ClassicDinnerOrder = {
//     salad: Salad.Fattoush,
//     entree: Entree.Curry
//   };

//   expect(assembleTakeaway(jackOrder, jillOrder)).toEqual({
//     jack: Salad.Caesar,
//     jill: Salad.Fattoush
//   })

//   expect(assembleTakeaway({salad: Salad.Caesar}, jillOrder)).toEqual({
//     jack: Salad.Caesar,
//     jill: Salad.Fattoush
//   })
//  // Comment out this test before moving on.
// })

/*
This works well enough, but now Jack wants to switch to a dinner option that doesn't even
_have_ a salad.

Just like when we introduce constants or variables in code so we can name a value
we may wish to change later, we can also create type variables that alias a type.

Introduce 3 variables that can be changed to swap jack between any order type
and any course to take home.

Extra credit: Use the clues below to make only two variables which need to be updated.
In this case, it should be impossible to mismatch the name of the saved course and type
type it's associated with.

*/
// test("6.3", () => {
//   // Jack wants the whole enchilada
//   type _1 = AssertAssignable<JackOrderType, WholeEnchiladaOrder>

//   // We should track which course Jack wants to save.
//   expect(jackSavedCourse).toEqual("amuse")

//   // The type associated with jack's saved course must match
//   // the type of the field we've named.
//   type _2 = AssertAssignable<JackSavedCourseType, JackOrderType[typeof jackSavedCourse]>

//   let jack: JackOrderType = {
//     amuse: AmuseBouche.BruschettaBite,
//     appetizer: Appetizer.FriedCauliflower,
//     salad: Salad.Caesar,
//     entree: Entree.Lasagna,
//     dessert: Dessert.FlourlessChocolateCake
//   }

//   expect(assembleTakeaway(jack, jillOrder)).toEqual({
//     jack: AmuseBouche.BruschettaBite,
//     jill: Salad.Fattoush
//   })
  
//   // Why are these assertions here? Puzzling. Maybe they are tricks
//   // that could simplify the implementation?
//   type _x1 = AssertAssignable<"amuse", typeof jackSavedCourse>
//   type _x2 = AssertAssignable<AmuseBouche, JackOrderType["amuse"]>
//  // Comment out this test before moving on.
// })