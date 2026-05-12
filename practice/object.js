// Dot notation evaluates the key as a literal name. When you write obj.name, JavaScript goes and looks for a property literally called "name". There's no ambiguity — the key is baked into your source code.
// Bracket notation evaluates the expression inside the brackets first, then uses the result as the key. So obj[x] doesn't look for "x" — it reads whatever is stored in the variable x, then looks that up. This is what makes bracket notation "dynamic."

// Dot is static — Bracket is dynamic
// With dot, the key is hardcoded in your code. With brackets, the key can be computed at runtime — a variable, a function return value, a template string, anything.
const obj = { x: 10, y: 20 };
const axis = getAxisFromUser(); // returns "x" or "y"

obj.axis       // ❌ looks for key literally named "axis"
obj[axis]      // ✅ looks up whatever axis holds

