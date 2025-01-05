import "./style.css";
// populate colors in rectangle colors div
//
const colors = [
    "#00296b",
    "#00171f",
    "#463f3a",
    "#f896cd",
    "#d5dfe5",
    "#ff6b35",
    "#6096ba",
    "#abc4ff",
    "#279af1",
    "#415d43",
    "#47126b",
    "#6d23b6",
    "#ce84ad",
    "#cbc0d3",
    "#14243b",
];

//get  rectangle element
const rotatingRectangle = document.querySelector(
    ".rectangle",
) as HTMLDivElement;

const colorPickerButton = document.querySelector(
    ".picker-button",
) as HTMLButtonElement;
const ColorPicker = document.querySelector(
    ".color-picker ",
) as HTMLInputElement;

const angleSlider = document.querySelector(".angle-slider") as HTMLInputElement;
const currentAngleSpanElement = document.querySelector(
    ".current-angle",
) as HTMLSpanElement;

//if domcontent loaded then generate colors
document.addEventListener("DOMContentLoaded", () => {
    //take colors div  make a colored button and append it to the colors div
    const colorsDiv = document.querySelector(".rectangle-colors");
    colors.forEach((color: string) => {
        const colorButton = document.createElement("button");
        colorButton.style.backgroundColor = color;
        colorsDiv?.appendChild(colorButton);
    });
    const colouredButtons = document.querySelectorAll(
        ".rectangle-colors button",
    ) as NodeListOf<HTMLButtonElement>;
    colouredButtons.forEach((button: HTMLButtonElement) => {
        button.addEventListener("click", () => {
            rotatingRectangle.style.backgroundColor =
                button.style.backgroundColor;
        });
    });
});
colorPickerButton.addEventListener("click", () => {
    ColorPicker.click();
});

ColorPicker.addEventListener("input", (event: Event) => {
    const target = event.target as HTMLInputElement;
    rotatingRectangle.style.backgroundColor = target.value;
});

angleSlider?.addEventListener("input", (event: Event) => {
    const target = event.target as HTMLInputElement;
    rotatingRectangle.style.transform = `rotate(${target.value}deg)`;
    currentAngleSpanElement.innerHTML = `${target.value}&deg;`;
});
