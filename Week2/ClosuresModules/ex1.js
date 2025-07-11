const StringFormatter = function () {
  return {
    capitalizeFirst: function (str) {
      if (!str) return ""
      return str[0].toUpperCase() + str.slice(1).toLowerCase()
    },
    toSkewerCase: function (str) {
      return str.replace(/ /g, "-")
    }
  }
}

// Usage:
const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))  // Dorothy
console.log(formatter.toSkewerCase("blue box"))   // blue-box
