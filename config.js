// Configuração da página de assinatura. Este arquivo é PÚBLICO e NÃO tem token:
// o token de envio vai dentro de cada link gerado pelo sistema (no fragmento #..., que o
// navegador não manda a nenhum servidor). O conteúdo enviado é CIFRADO com a chave pública
// abaixo — só o servidor (chave privada) consegue ler.
window.ASSINATURA_CONFIG = {
  repo: "victortecnolta-commits/oficina",   // onde os issues de assinatura são criados
  chavePublica: "MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnOU/RbEHCsIGisJLtveXI9itWBczU3oa0OTed7fyTMRSkiIbTuxaDO+ky3m23pT5ClFUWzJsPF6jSF/n5oet89SPsuQiOoJb446+VLIQLb7ZHSaCjvyLXwRpdnfwS62ay8E4dDuc3zHJ0A0Bu9vEsDxfemRDfDFr3eGGJoXN9cBNazd0SgT5mJ4ansdcqEO6Yukuhr0BBSdHy1KfQYvPgiRJMR/oDQv0lhzSdwfpdOqZtqOStyiZ16s4yf1v/aBO/nq1JBN5j+oP+Nv+cbgTu6YLkVp8qLUgTGCQ+WanVcoUqrzUqVmh3a+4KvlH1iZyeSu1FmRWqsqgSu0rat/b4w/pu4s2+5bEwGJdWFcnx3J6g1ScdCUQsg6exSqMxYv+a5pghOAZSlWezTmBC5SlGwjO0555wj1bJm1QovwRi1ZoeOcQ4bNq6M4ZGfADDJ21pptdKvDAe5h7+qyjOx8gd8tT/CszagLMlO5+6myZvnHjbxZlffXNb0sZ8n1KAqU1AgMBAAE=" // saída de gerar_chaves_assinatura.py (a privada fica só no servidor)
};
