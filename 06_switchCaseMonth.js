function monthOfYear(month) {
    console.log(`given month number is : ${month}`);
  switch (month) {
    case 1:
      console.log("Month Name is :  January");

      break;
    case 2:
      console.log("Month Name is :  February");

      break;
    case 3:
      console.log(`Month Name is :  March`);

      break;

    case 4:
      console.log(`Month Name is :  April`);

      break;

    case 5:
      console.log(`Month Name is :  May`);

      break;

    case 6:
      console.log(`Month Name is :  June`);

      break;

    case 7:
      console.log(`Month Name is :  July`);

      break;

    case 8:
      console.log(`Month Name is :  August`);

      break;

    case 9:
      console.log(`Month Name is :  September`);

      break;

    case 10:
      console.log(  `Month Name is :  october`);

      break;

    case 11:
      console.log(`Month Name is :  November`);

      break;

    case 12:
      console.log(`Month Name is :  December`);

      break;


    default:
        console.log(`Month Name is :  invalid`);
      break;
  }
}
monthOfYear(1);
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(undefined);
monthOfYear(null);

