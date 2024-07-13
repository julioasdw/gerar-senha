let counters = [1, 1, 1, 1, 1]; // Contadores de senhas para cada guichê

function showDetails(guiche) {
    const services = [
        [
            "Recebimento de Pagamentos",
            "Pagamento de Faturas",
            "Saques",
            "Consultas de Saldo",
            "Atendimento Preferencial a Idosos e Pessoas com Deficiência"
        ],
        [
            "Atualização de Endereço",
            "Atualização de Contato Telefônico",
            "Atualização de Dados Pessoais",
            "Inclusão de Dependentes",
            "Exclusão de Dependentes"
        ],
        [
            "Recebimento de Pagamentos",
            "Pagamento de Faturas",
            "Saques",
            "Consultas de Saldo",
            "Emissão de Boletos"
        ],
        [
            "Agendamento de Exames",
            "Retirada de Resultados de Exames",
            "Orientações sobre Preparo para Exames",
            "Coleta de Material Biológico",
            "Atendimento de Urgências Laboratoriais"
        ],
        [
            "Informações sobre Serviços",
            "Reclamações e Sugestões",
            "Orientações sobre Planos e Convênios",
            "Agendamento de Consultas",
            "Suporte Técnico (para serviços online)"
        ]
    ];

    document.getElementById('main-container').style.display = 'none';
    document.getElementById('details-container').style.display = 'block';
    
    let servicesList = '<h2>Guichê ' + guiche + '</h2>';
    services[guiche - 1].forEach(service => {
        servicesList += '<p>' + service + '</p>';
    });
    document.getElementById('services').innerHTML = servicesList;
    document.getElementById('services').setAttribute('data-guiche', guiche);
}

function goBack() {
    document.getElementById('details-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
}

function printTicket() {
    const guiche = document.getElementById('services').getAttribute('data-guiche');
    const ticketNumber = counters[guiche - 1]++;
    const ticket = `SENHA: ${ticketNumber}\nGUICHÊ: ${guiche}`;
    
    const printWindow = window.open('', '', 'width=300,height=200');
    printWindow.document.write(`<pre>${ticket}</pre>`);
    printWindow.document.close();
    printWindow.focus();  // Garante que a janela de impressão está em foco
    //printWindow.print();
    //printWindow.close();  // Fecha a janela de impressão automaticamente
}