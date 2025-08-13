export function part2(): void {
  // 1. The logo text of the site has the wrong color. Change it to the correct one.
  const logoH1 = document.querySelector<HTMLElement>(".logo-text");
  logoH1!.style.color = "initial";

  // 2. The alignment of the elements inside the header element are wrong. Change it to the correct one.
  //    Hint, check the flex properties for the correct alignment.
  //    Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  // 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
  const header = document.querySelector<HTMLElement>("header");
  header!.style.cssText = ` 
    justify-content : flex-start; 
    border-bottom: 1px solid lightgrey;
  `;

  // 4. The recipe name is wrong, change it to the correct one.
  const recipeName = document.querySelector<HTMLElement>("#recipe-name");
  recipeName!.innerText = "Frozen Cheescake";

  // 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead.
  //    This can be fixed by adding a class to that element
  const timerContainer = document.querySelector<HTMLElement>(".time-container");
  const timerIconSpan = timerContainer?.firstElementChild;
  timerIconSpan!.classList.add("material-symbols-outlined");

  // 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
  const estimatedTime = timerContainer!.querySelector<HTMLSpanElement>(".time");
  estimatedTime!.innerText = "60+ min";

  // 7. The src path to the image is wrong, or atleast it's showing the wrong image.
  // Change it to the correct one. The available images can be found in the assets folder.
  const image = document.querySelector<HTMLImageElement>(
    ".image-container img"
  );
  image!.src = `src\\assets\\frozen-cheesecake-slice.jpg`;

  // 8. The background color of the ingredients list container is wrong. Fix it.
  const ingredientsContainer = document.querySelector<HTMLElement>(
    ".ingredients-container"
  );
  ingredientsContainer!.style.backgroundColor = "#f9f9f9";

  // 9. The ingredients are divided in to two parts, one for the bottom and one for the paste.
  //    In the list of the ingredients to the bottom, there is a text instead of two list items.
  //    Remove the text and add those two list items.

  const firstIngredient = document.createElement("li");
  firstIngredient.innerText = "15st digistivetex";

  const secondIngredient = document.createElement("li");
  secondIngredient.innerText = "Lite smör";

  const ingredientsListBottom = document.querySelector<HTMLUListElement>(
    ".ingredients-list-bottom "
  );

  ingredientsListBottom!.replaceWith(firstIngredient, secondIngredient);

  // 10. The third ingredient in the list of ingredients to the paste is wrong.
  //     Change that specific ingredient to the correct one.
  const ingredientsListElements = document.querySelectorAll<HTMLUListElement>(
    ".ingredients-list-paste li"
  );

  ingredientsListElements[2].innerText = "3tsk vaniljsocker";

  // 11. There is also a missing ingredient in the list of ingredients to the paste.
  //     Look and see what it is and add that one the the end of the list.
  const ingredientsList = document.querySelector<HTMLElement>(
    ".ingredients-list-paste"
  );

  const lastIngredient = document.createElement("li");
  lastIngredient.innerText = "400g naturell philadelphiaost";

  ingredientsList?.appendChild(lastIngredient);

  // 12. The text "Instructions" to the left, beneath the image,
  //     has some shadow styling applied to it. Remove that styling.
  const instructionsHeader3 =
    document.querySelector<HTMLElement>(".instructions");

  instructionsHeader3?.classList.remove("shadow");

  // 13. Two list elements of the list of instructions are incorrect.
  //     Find them and change them to the correct ones.
  const wrongListElementText = document.querySelectorAll<HTMLOListElement>(
    ".instructions-list li"
  );

  wrongListElementText![1].innerText =
    "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

  wrongListElementText![8].innerText = "Ställ in i frysen över natten..";
}
