export function part1(): void {
  // 1. What is the name of the recipe?
  const favoriteRecipeName = document.querySelector<HTMLElement>(
    ".description-container #recipe-name"
  );

  console.log(favoriteRecipeName!.innerText);

  // 2. What HTML tag is used to display the Recipe name?
  const recipeTagUsed = document.querySelector<HTMLElement>(
    ".description-container #recipe-name"
  );

  console.log(favoriteRecipeName!.tagName);

  // 3. What is the font size of the paragraph tag with the class "description".
  const descriptionContent =
    document.querySelector<HTMLTextAreaElement>(".description");

  const descriptionFontSize = window.getComputedStyle(descriptionContent!);

  console.log(descriptionFontSize.fontSize);

  // 4. What is the value of the alt attribute on the image?
  const image = document.querySelector(".image-container img");

  console.log(image!.getAttribute("alt"));

  // 5. What is the dimensions and the url of the image?
  //    Create an object that looks like this, and log it to the console:
  //      {
  //        url: string
  //        height: number,
  //        width: number,
  //      }

  const image2 = document.querySelector<HTMLImageElement>(
    ".image-container img"
  );

  const imageDimensionsAndUrl = {
    url: image2!.src,
    height: image2!.naturalHeight,
    width: image2!.naturalWidth,
  };

  console.log(imageDimensionsAndUrl);

  // 6. How many ingredients has the paste?
  const pasteIngredients = document.querySelectorAll<HTMLUListElement>(
    ".ingredients-list-paste li"
  );

  console.log(pasteIngredients.length);

  // 7. Which is the forth element in the list containing the ingredients for the paste?
  console.log(pasteIngredients[3].innerText);

  // 8. Create an an array of objects from the instructions.
  //    Each element in the array should be an object that looks like this:
  //    {
  //      order: number;
  //      text: instruction;
  //    }

  interface IInstruction {
    order: number;
    text: string;
  }

  let instructionsArray: IInstruction[] = [];

  const instructionsCollection = document.querySelectorAll<HTMLOListElement>(
    ".instructions-list li"
  );

  instructionsCollection.forEach((instruction, index) => {
    const orderNumber = index + 1;

    const instructionObject: IInstruction = {
      order: orderNumber,
      text: instruction.innerText,
    };

    instructionsArray.push(instructionObject);
  });

  console.log(instructionsArray);
}
