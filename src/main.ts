import "./style.css";
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

const circleDiv = document.querySelector(".circle") as HTMLDivElement;
const rectangleOutsideCircle = document.querySelector(
    ".rectangle-outside-circle",
) as HTMLDivElement;

//if dom content  loaded then generate colors
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

let isResizing = false;

circleDiv.addEventListener("mousedown", (event) => {
    isResizing = true;
    document.addEventListener("mousemove", onResize);
    document.addEventListener("mouseup", stopResize);
});

function onResize(event: MouseEvent) {
    if (!isResizing) {
        return;
    }
    const boundaryRect = circleDiv.parentElement?.getBoundingClientRect();
    let newDiameter = 2 * (event.clientX - boundaryRect?.left!);

    //take minimum from the  boundary height and circle  width and height and assign new
    //diameter to circleDiv
    newDiameter = Math.min(
        newDiameter,
        boundaryRect?.width!,
        boundaryRect?.height!,
    );
    console.log(newDiameter);
    // minus 10 for keeping it smaller for avoiding the absurd scrollbar
    circleDiv.style.width = `${newDiameter - 10}px`;
    circleDiv.style.height = `${newDiameter - 10}px`;
}
//cleanup
function stopResize(event: MouseEvent) {
    isResizing = false;
    document.removeEventListener("mousemove", onResize);
    document.removeEventListener("mouseup", stopResize);
}
