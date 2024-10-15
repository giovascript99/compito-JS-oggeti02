let agenda = {
    'contatti': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],
    
    mostraTuttiIContatti() {
        console.log('Tutti i contatti:');
        this.contatti.forEach((contatto) => {
            console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`);
        });
    },
    
    mostraContatto(indice) {
        console.log('Un contatto:');
        let contatto = this.contatti[indice];
        if (contatto) {
            console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`);
        } else {
            console.log('Contatto non trovato.');
        }
    },
    
    eliminaContatto(indice) {
        console.log('Elimina contatto');
        this.contatti.splice(indice, 1);
        console.log('Contatto eliminato.');
    },
    
    aggiungiContatto(nome, telefono) {
        console.log('Aggiungi contatto');
        let nuovoContatto = { nome, telefono };
        this.contatti.push(nuovoContatto);
        console.log('Contatto aggiunto.');
    },
    
    modificaContatto(indice, nuovoNome, nuovoTelefono) {
        const contatto = this.contatti[indice];
        if (contatto) {
            contatto.nome = nuovoNome;
            contatto.telefono = nuovoTelefono;
            console.log('Contatto modificato.');
        } else {
            console.log('Contatto non trovato.');
        }
    }
}

agenda.mostraTuttiIContatti();

agenda.mostraContatto(1);

agenda.eliminaContatto(2);
agenda.mostraTuttiIContatti();

agenda.aggiungiContatto('Luca', '3335555555');
agenda.mostraTuttiIContatti();

agenda.modificaContatto(0, 'Marco', '3330000000');
agenda.mostraTuttiIContatti();