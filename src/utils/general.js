export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function format(string) {
  if (typeof string != "string") return string  ;
  let output = "";
  if (string.includes("-")) {
    let temp = string.split("-");
    output = temp.map((s) => capitalize(s));
    output = output.join("");
  } else {
    output = capitalize(string);
  }
  return output;
}
