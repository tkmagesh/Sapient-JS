var products = [
	{id : 9, name : "pen", cost : 100, units : 10, category :1},
	{id : 3, name : "hen", cost : 150, units : 11, category :2},
	{id : 5, name : "ten", cost : 230, units : 9, category :1},
	{id : 2, name : "ken", cost : 75, units : 23, category :2},
	{id : 8, name : "den", cost : 23, units : 19, category :1},
	{id : 1, name : "len", cost : 67, units : 7, category :1}
]
function sort(numbers, comparerFn){
 var i,j,temp,left,right;
 for(i=0;i<numbers.length-1;i++)
  for(j = i+1; j<numbers.length;j++){
     left = numbers[i];
     right = numbers[j];
     if (comparerFn(left,right) > 0){
       temp = left;
       numbers[i] = numbers[j];
       numbers[j] = temp;
     }
   }
}

function filter(numbers,criteriaFn){
  var result=[],
      i=0,
      count = numbers.length;
  for(;i<count;i++){
    if (criteriaFn(numbers[i]))
      result.push(numbers[i]);
  }
  return result;
}
function sign(n){
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}

sort(products,function(p1,p2){ return sign(p1.units - p2.units);})

function sum(list, attributeSelector){
  var result = 0, attributeSelectorFn = attributeSelector;
  if (typeof attributeSelector == "string")
     attribSelectorFn = function(item){ return item[attributeSelector]; }; 
  for(var i=0;i<list.length;i++)
     result += attribSelectorFn(list[i]);
  return result;
}

function min(list,attributeName){
  var result = list[0][attributeName];
  for(var i=1;i<list.length;i++)
     if (result > list[i][attributeName]) result=list[i][attributeName];
  return result;
}

function max(list,attributeName){
  var result = list[0][attributeName];
  for(var i=1;i<list.length;i++)
     if (result < list[i][attributeName]) result=list[i][attributeName];
  return result;
}

function transform(list,transformerFn){
 var result=[];
 for(var i=0;i<list.length;i++)
   result.push(transformerFn(list[i]));
 return result;
}

function groupBy(list,fieldSelector){
  var result = {},
      fieldSelectorFn = (typeof fieldSelector == "function") ? fieldSelector : function(item){ return item[fieldSelector];};
  for(var i=0;i<list.length;i++){
       var groupAttribValue = fieldSelectorFn(list[i]);
       if (!result[groupAttribValue])
          result[groupAttribValue] = [];
       result[groupAttribValue].push(list[i]);
  }
  return result;
}

function pluck(list,attributeName){
 var result = [];
 for(var i=0;i<list.length;i++)
    result.push(list[i][attributeName]);
 return result;
}

function each(list,operation){
  for(var i=0;i<list.length;i++)
     operation(list[i]);
}

















