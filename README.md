# LocationLab — VPN Simulator

Aplicação educativa em Next.js para demonstrar uma interface de seleção de localização virtual.

## O que faz
- Seleciona destinos demonstrativos.
- Atualiza um mapa esquemático e dados fictícios.
- Simula os estados de conexão/desconexão.
- Não solicita localização do dispositivo, não altera o IP público, não criptografa tráfego e não é uma VPN real.
- Os endereços `192.0.2.x`, `198.51.100.x` e `203.0.113.x` são faixas reservadas para documentação.

## Executar localmente
Requer Node.js 18.17 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel
1. Extraia o ZIP e envie a pasta para um repositório GitHub.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Confirme o framework Next.js e clique em **Deploy**.
4. Não são necessárias variáveis de ambiente para esta demonstração.

## Para construir uma VPN real
É necessário um servidor VPN (por exemplo, WireGuard), configuração de rede e autenticação. Uma aplicação web comum não pode, por si só, redirecionar todo o tráfego do dispositivo. Não apresente o estado simulado como proteção real.
