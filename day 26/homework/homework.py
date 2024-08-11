def transform_list(nums):
    new_list = []
    for num in nums:
        if num % 2 == 0:
            new_list.append(num / 2)
        else:
            new_list.append(num * 2)
    return new_list