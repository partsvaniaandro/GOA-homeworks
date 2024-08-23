print("CREATE ACCOUNT")
#ვეუბნები მომხმარებელს რომ მისი სახელი შეიყვანოს
account = str(input("please enter your account name: "))

#ბანკის ბალანსი საიდანაც შეეძლება მომხმარებელს გამოიტანოს ფული ან შეიტანოს ფული.
bank_balance = 100
#ხელზე ფული რამდენი აქვს
cash = 500
print(account, "your bank balance is", bank_balance)
#ვეკითხები მომხმარებელს ფულის შეტანა უნდა თუ გამოტანა
option=input("do you want to withdraw money or deposit money?: ")
#თუ მას გამოტანა უნდა, ვეკითხები თუ რამდენი ფულის გამოტანა სურს და თუ მითითებული რიცხვი ბალანსზე მეტი არის ან თუ მითითებული რიცხვი 0-ზე ნაკლებია უწერს რომ ფულის გამოტანა ვერ მოხერხდა. თუ შეტანილი რიცხვი ბალანსზე ნაკლებია ან თუ მისი ტოლია ფული გამოაქვს და ბალანსს აკლებს იმდენს რაც მიუთითა. ამის შემდეგ უწერს მის ბანკის ბალანსს და ხელზე ფულის რაოდენობას
if option == "withdraw":
    withdraw = int(input("how much money do you want to withdraw?: "))
    if withdraw > bank_balance:
        print(account, "the amount you entered is above your balance. so therefore withdraw is invalid")
    elif withdraw < 0:
        print(account, "that is not a valid number therefore withdraw is invalid")
    elif withdraw <= bank_balance:
        bank_balance = bank_balance - withdraw
        cash = cash + withdraw
        print("you succesfully withdrawed money")
        print("the bank balance is ", bank_balance)
        print("your cash amunt is", cash)
#---------------------------------------------------------------#
#თუ არჩევანი უდრის "deposit"-ს მაშინ მე ვეკითხები მომხმარებელს თუ რამდენი ფულის შეტანა უნდა. თუ მითითებული რიცხვი 0-ს უდრის ან მასზე ნაკლებია ვუწერ რომ არასწორი რიცხვია და შეტანა ვერ მოხერხდა.და თუ მითითებული რცხვი  0-ზე მეტი არის და მომხმარებლის ფულის რაოდენობაზე ნაკლები ან ტოლი მაშინ დეპოსიტი სწორედ ჩატარდება.
#დავუპრინტავ და ვაჩვენებ რამდენი აქვს ხელზე და რამდეი აქვს ბანკში
elif option == "deposit":
    deposit = int(input("how much money would you like to deposit?: "))
    if deposit <= 0:
        print(account, "that is not a valid amount. therefore deposit is invalid")
    elif deposit > cash:
        print("you dont have that much cash. deposit is invalid")
    elif deposit > 0 and deposit <= cash:
        bank_balance = bank_balance + deposit
        cash = cash - deposit
        print("you succesfully deposited money")
        print("the bank balance is", bank_balance)
        print("yur cash amount is", cash)
#თუ არც withdraw ან არც deposit არ დაწერა. ვუწერ რომ ეს არჩევანი არ არის.
else:
    print("that is not a valid option")
print("have a great day. exiting account")