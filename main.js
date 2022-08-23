var id = eval(prompt('Enter Roblox User Id!')); if (id === 0 /* Enter user id */) { if (fetch('api.roblox.com/' + id)) { alert('Successfully redeemed the item!') } else {alert('Failed!')}} 
