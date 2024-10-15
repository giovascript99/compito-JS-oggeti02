let name;
let number;

let check = Number(prompt('premi 1 se vuoi eliminare o aggiungere un contatto, \npremi 2 se vuoi modificae un contatto'));

let agenda = {
    'contacts': [
        {'name': 'Nicola', 'number': '3331111111'},
        {'name': 'Lorenzo', 'number': '3332222222'},
        {'name': 'Paola', 'number': '3333333333'},
        {'name': 'Jenny', 'number': '3334444444'}
    ],
    
    showAllContacts: function() {
        console.log('- TUTTI I CONTATTI:');
        this.contacts.forEach(contact => {
            console.log(`${contact.name}: ${contact.number}`);
        });
    },
    
    showContact: function(nome) {
        let contact = this.contacts.find(contact => contact.name == nome);
        if (contact) {
            console.log(`CONTATTO TROVATO - ${contact.name}: ${contact.number}`);
        } else {
            console.log('CONTATTO NON TROVATO');
        }
    },
    
    removeAddContacts: function(nome, numero){
        let contact = this.contacts.find(contact => contact.name == nome);
        let index = this.contacts.indexOf(contact);
        if(contact){
            this.contacts.splice(index, 1)
            console.log('CONTATTO ELIMINATO');
        }else{
            this.contacts.push({name: nome, number: numero})
            console.log('CONTATTO AGGIUNTO');
        }
    },
    
    editContact: function(nome, newNumber){
        let contact = this.contacts.find(contact => contact.name == nome)
        if(contact){
            console.log('CONTATTO MODIFICATO');
            contact.number = newNumber
            
        }else{
            console.log('CONTATTO NON TROVATO');
            
        }
    }
}

// agenda.showAllContacts();
// agenda.showContact('Paola');
// agenda.removeAddContacts(name, number);
// agenda.showAllContacts();
// agenda.editContact('Jenny', 3335555555)
// agenda.showAllContacts();


switch (check) {
    case 1:
    name = prompt('inserisci il nome del contatto')
    number = prompt('inserisci il numero del contatto')
    agenda.removeAddContacts(name, number)
    break;

    case 2:
    name = prompt('inserisci il nome del contatto')
    number = prompt('inserisci il nuovo numero del contatto')
    agenda.editContact(name, number)
}

agenda.showAllContacts()