const StringFormatter = function () {
    const capitalizeFirst = function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }
  
    const toSkewerCase = function (str) {
      return str.replaceAll(" ", "-")
    }
  
    return {
      capitalizeFirst: capitalizeFirst,
      toSkewerCase: toSkewerCase
    }
  }
  
  const formatter = StringFormatter()
  console.log(formatter.capitalizeFirst("dorOthy")) // Dorothy
  console.log(formatter.toSkewerCase("blue box"))   // blue-box
  
