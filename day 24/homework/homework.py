def manual_count(word, count_char):
    count = 0
    

    for character in word:
        if character == count_char:
            count += 1
            
    return count


result = manual_count("goa is the best in the whole world", 'o')
print(result)

#islower ფუნქციაა რომელიც აბრუნებს true-ს თუ მითითებულ სტრინგში ყველა სიმბოლო პატარა არის
#isupper ფუნქციაა რომელიც აბრუნებს true-ს თუ მითითებულ სტრინგში ყველა სიმბოლო დიდი არის
#isnumeric ფუნქციაა რომელიც აბრუნებს true-ს თუ მითითებულ სტრინგში ყველა სიმბოლო რიცხვი არის
#isalpha ფუნქციაა რომელიც აბრუნებს true-ს თუ ყველა სიმბოლო სტრინგში არის ინგლისური ალფაბეტიდან
