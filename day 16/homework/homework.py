numbers = [1,2,3,4,5,6,7,8,9]
max_number=numbers[0]
for number in numbers:
    if max_number < number:
        max_number = number
print(max_number)



numbers = [1,2,3,4,5,6,7,8,9]
min_number=numbers[0]
for number in numbers:
    if min_number > number:
        min_number = number
print(min_number)

list = ["apple", "pineapple",  "watermelon", "peach", "grapes", "cherry"]
print(list.index("apple"))
print(list.index("pineapple"))
print(list.index("watermelon"))
print(list.index("grapes"))

combined_list = [1, "one", 2, "two", 3, "three"]
int_list = []
str_list = []
int_list.append(combined_list.pop(0))
int_list.append(combined_list.pop(1))
int_list.append(combined_list.pop(2))

str_list.append(combined_list.pop(0))
str_list.append(combined_list.pop(0))
str_list.append(combined_list.pop(0))
print(str_list)
print(int_list)


