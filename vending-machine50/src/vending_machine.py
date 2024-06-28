#VENDING MACHINE APP.
# Author/Developer: RAZMAN RAMAN

# TODO  
''' Valid products '''
CANDY = "candy"
CHIPS = "chips"
COLA = "cola"

# vending machine class 
class VendingMachine:

    def __init__(self):
        self.products = {CANDY : 0.65, CHIPS : 0.50, COLA : 1.00}
        self.money = []
        self.invalid_money = []
        self.selected_product = None

        # Define the drinks and their prices
        self.drinks = {'D1': 1, 'D2': 2, 'D3': 3}

        # Define the available notes for change
        self.currency_notes = [50, 20, 10, 5, 1]

    def calculate_change(self, note, price):
        change = note - price
        change_notes = {}

        # for each note denomination, count the number of notes
        # example {RM5: 1, RM1: 3}
        # Update the change remaining: 
        # change -= note_denomination * (change // note_denomination).
        # Add the note denomination and its count to the dictionary.
        for note_denom in self.currency_notes :
            if change >= note_denom:
                change_notes[note_denom] = change // note_denom
                change -= note_denom * (change // note_denom)
        return change_notes

    def display(self):
        total_money = sum(self.money)
        message = self.build_message(total_money)
        self.selected_product = None
        return message

    def build_message(self, total_money):
        if self.selected_product:
            return self.display_with_selected_product(total_money)
        else:
            return self.display_without_selected_product(total_money)

    def display_without_selected_product(self, total):
        if (total > 0.0):
            return self.format_amount(total)

        return "INSERT MONEY/NOTES TO BUY"

    def display_with_selected_product(self, total):
        if (total == self.products[self.selected_product]):
            return "THANK YOU"
        else:
            return "PRICE %s" % self.format_amount(self.products[self.selected_product])

    def format_amount(self, amount):
        return "%s" % "{:.2f}".format(amount)

    def setSelectDrink(self):
        # show notes 
        self.currency_notes = [50, 20, 10, 5, 1]

        note = int(input("Please insert a Note (RM): "))
        drinkSelected = input("Please select a drink: ")
        drinks = self.drinks
        if drinkSelected in drinks:
            price = drinks[drinkSelected]

            if note >= price:
                change_notes = self.calculate_change( note, price) 
                for n, amount in change_notes.items():
                  print(f"RM{n}: {amount}")
  


# main run
print(VendingMachine().display(  ))

# insert note money   
# select drink  
# accept payment, dispense drink

# new instance of Vending machine class
vendingMachine = VendingMachine()

vendingMachine.setSelectDrink()

# display and give change with the minimum number of notes.
print(vendingMachine.calculate_change( 10, 2 ))

print("TOTAL MONEY")
 
 
 