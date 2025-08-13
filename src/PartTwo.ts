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
}
