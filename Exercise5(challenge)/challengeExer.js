console.clear();
/* 3. There Ain't No Mountain High Enough

Now that you have the car situation figured out and have checked into the hotel,
you're all set. This means it's adventure time!

You pull out a list of the best tourist activities around the island
and decide on a mountain climbing trail.

When you get there, you realize a contest is taking place: 
A few boxes were hidden in some of the mountains' viewpoints. 
Each box contains a set of digits inside.
Your job is to multiply all the digits in said set, and if you succeed,
you win a free meal in the most famous restaurant on the island.

Task
1. Write a function that solves the problem above, no matter what set of digits you're given.
2. Your function should return the result of the multiplication of all the digits inside the box.

Example
Let's imagine that you open your box, and inside it there's the following
set of numbers: [1,4,7,8]. In this case, your function should return 224. */

const getMultipliedBoxDigits = (digits) => {
    let result = 1;
    digits.forEach(e => result *= e);
    return result;
  };
  
  // Test your code by changing the values below!
  const boxDigits = [1, 4, 7, 8];
  getMultipliedBoxDigits(boxDigits);
  
  /* 4. Under The Sea
  
  Congratulations, you won a free dinner!
  But before you stuff your face with some delicious local delicacies,
  it's time for one last adventure: snorkeling!
  
  You get into your car and happily drive to the water sports site,
  but when you get there, the girl from the snorkeling booth is locking the doors.
  You approach her to get some answers, and she tells you that,
  according to her ocean-monitoring chart, there is a higher than 30% chance
  that you will get seasick. When that happens, her orders are to close for the day.
  You look at her chart, and knowing that only the change from calm (-) to wave (~)
  adds to the probability of being seasick, it is your strong belief that she's wrong.
  
  Task
  1. Write a function that analyzes the girl's chart, counting the number of calm to wave changes. If the result represents more than 30% of the total events, she's right. If not... Time to get out your cool snorkeling goggles!
  2. Your function should return the probability value, rounded down. */
  
  const chartAnalyser = (chart) => {
    let result = 0;
    let prePos = chart[0];
    chart.forEach (e=> {
        if(prePos != e && e == "~") result++;
        prePos = e;
    });
    result = result/chart.length;
    return result;
  };
  
  const chart = ["-", "-", "~", "-", "-", "-", "-", "~", "~", "-", "-", "~", "~"];
  chartAnalyser(chart);  