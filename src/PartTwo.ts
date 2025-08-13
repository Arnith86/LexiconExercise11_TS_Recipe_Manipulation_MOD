export function part2(): void {
  // 1. The logo text of the site has the wrong color. Change it to the correct one.
  const logoH1 = document.querySelector<HTMLElement>(".logo-text");
  logoH1!.style.color = "initial";

  // 2. The alignment of the elements inside the header element are wrong. Change it to the correct one.
  //    Hint, check the flex properties for the correct alignment.
  //    Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  const header = document.querySelector<HTMLElement>("header");
}
