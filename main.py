#none of this is an actual virus this is just the code in the exe inside of the dist folder
from tkinter import *
import tkinter.ttk as ttk
from urllib.request import urlopen
import re as r
import time
import random
import threading

data = str(urlopen('http://checkip.dyndns.com/').read())
ip = r.compile(r'Address: (\d+\.\d+\.\d+\.\d+)').search(data).group(1)

def start():
    GB = 100
    download = 0
    speed = 1
    bar.pack()
    precentlabel.pack()
    while(download<GB):
        
        time.sleep(random.randrange(1,10)/100)
        bar['value']+=(speed/GB)*100
        download+=speed
        percent.set(str(int((download/GB)*100))+"%")
        precentlabel.config(text=str(download)+"/"+str(GB)+" GB completed")
        if download == 100:
            text2.pack()
            threading.Thread(target=fakehack).start()
        window.update_idletasks()
def fakehack():
    time.sleep(1)
    IPtext.pack()

window = Tk()
window.attributes("-topmost", True)

window.geometry("800x500")
window.config(bg="#212121")
window.title("free rubux 100%")
window.resizable(False,False)
percent = StringVar()

text = Label(window,text="want free rubux?",font=("Arial", 40,"bold"),bg="#212121",fg="#ffffff")
text.pack()
button = Button(window,text="get free rubux",bg="#212121",fg="#ffffff",font=("Arial", 40,"bold"))
button.pack()
button.config(command=start, activebackground="#212121",activeforeground="#ffffff",font=("Arial", 40,"bold"))
text2 = Label(window,text="get hacked lil bro",bg="#212121",fg="#ffffff",font=("Arial", 40,"bold"))
IPtext = Label(window,text=ip,bg="#212121",fg="#ffffff",font=("Arial", 40,"bold"))
bar = ttk.Progressbar(window, orient=HORIZONTAL, length=320,mode="determinate")
precentlabel = Label(window,textvariable=percent,bg="#212121",fg="#ffffff",font=("Arial", 40,"bold"))

window.config(background="#212121")


window.mainloop()
