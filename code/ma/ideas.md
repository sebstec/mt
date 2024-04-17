# bypass
- .env nicht in forbidden file extensions
# fix
- content type
- allowed methods
# config notes
- in modsecurity.conf SecRuleEngine On
# useful
- read modsec log in container `watch -c -n 1 tail -n 32 modsec_audit.log`
