import pickle
import sklearn 
import sys

args = sys.argv[1]
# print(args)
pickle_file_path = (
    r"C:\Users\Shiv Narayan Singh\OneDrive\Desktop\Final Project\whatsapp\server\scripts\phishing.pkl"
)

with open(pickle_file_path, "rb") as f:
    loaded_object = pickle.load(f)

prediction = loaded_object.predict([args])
print(prediction)
# sys.stdout.flush()
