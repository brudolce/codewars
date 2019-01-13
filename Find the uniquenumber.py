def find_uniq(arr):
   for i in range(len( arr)):
        if arr[i] != arr[i-1] and arr[i] != arr[i+1]:
            return arr[i]