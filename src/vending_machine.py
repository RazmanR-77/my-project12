#VENDING MACHINE APP.

#Take two describe 

# TODO  
''' Valid coins '''
NICKEL = "nickel"
DIME = "dime"
QUARTER = "quarter"

''' Valid products '''
CANDY = "candy"
CHIPS = "chips"
COLA = "cola"

# vending machine class 
class VendingMachine:

    def __init__(self):
        self.valid_money = {NICKEL : .05, DIME : 0.1, QUARTER : 0.25}
        self.products = {CANDY : 0.65, CHIPS : 0.50, COLA : 1.00}
        self.money = []
        self.invalid_coins = []
        self.selected_product = None

    def display(self):
        total_coins = sum(self.money)
        message = self.build_message(total_coins)
        self.selected_product = None
        return message

    def build_message(self, total_coins):
        if self.selected_product:
            return self.display_with_selected_product(total_coins)
        else:
            return self.display_without_selected_product(total_coins)

    def display_without_selected_product(self, total):
        if (total > 0.0):
            return self.format_amount(total)

        return "INSERT MONEY TO BUY"

    def display_with_selected_product(self, total):
        if (total == self.products[self.selected_product]):
            return "THANK YOU"
        else:
            return "PRICE %s" % self.format_amount(self.products[self.selected_product])

    def format_amount(self, amount):
        return "%s" % "{:.2f}".format(amount)

#take 2 input fields, email and name

# main run
print(VendingMachine().display(  ))
print("TOTAL MONEY")
print(VendingMachine().build_message(  23))
# print(VendingMachine().build_message(  ""))

print("length MONEY")
print(VendingMachine().money.__len__())
print(VendingMachine().money)
print(VendingMachine().valid_money[NICKEL])
 
 