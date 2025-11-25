export const data = `
WITH ComprasPorGrupo AS (
    SELECT 
        CONVERT(date, c.DataNota) AS Dia,
        CASE
            WHEN pg.NomeGrupo IN (
                'MONITORADOS','ETICO','MEDICAMENTO','ANTICONCEPCIONAL'
            ) THEN 'Referências e Populares'
            WHEN pg.NomeGrupo IN (
                'BONIFICADOS','VITAMINAS','VITAMINAS 10','SUPLEMENTE','SUPLEMENTOS'
            ) THEN 'Bonificados/Vitaminas'
            WHEN pg.NomeGrupo IN ('GENERICOS') THEN 'Genericos'
            WHEN pg.NomeGrupo IN (
                'PERFUMARIA','PERFUME BOT','PERFUMARIA FINA','FRALDAS',
                'FORMULA INFANTIL','ABSORVENTES','PROTETORES'
            ) THEN 'Perfumarias'
            WHEN pg.NomeGrupo IN (
                'CONVENIENCIA','ACESSORIOS','VAREJINHO',
                'CONSIGNADOS','DIVERSOS'
            ) THEN 'Conveniencias'
            ELSE 'OUTROS'
        END AS Grupo,

        SUM(
            cp.Total + ISNULL(cp.ValorST, 0) - ISNULL(cp.TotalDesconto, 0) + ISNULL(cp.TotalOutros, 0)
        ) AS TotalCompra

    FROM Compra c
    INNER JOIN Compra_Produto cp ON c.CodigoCompra = cp.CodigoCompra
    INNER JOIN Produto p ON cp.CodigoProduto = p.CodigoProduto
    INNER JOIN Produto_Grupo pg ON p.CodigoGrupo = pg.CodigoGrupo

    WHERE c.DataNota BETWEEN '{{INICIO}}' AND '{{FIM}}'

    GROUP BY 
        CONVERT(date, c.DataNota),
        CASE
            WHEN pg.NomeGrupo IN (
                'MONITORADOS','ETICO','MEDICAMENTO','ANTICONCEPCIONAL'
            ) THEN 'Referências e Populares'
            WHEN pg.NomeGrupo IN (
                'BONIFICADOS','VITAMINAS','VITAMINAS 10','SUPLEMENTE','SUPLEMENTOS'
            ) THEN 'Bonificados/Vitaminas'
            WHEN pg.NomeGrupo IN ('GENERICOS') THEN 'Genericos'
            WHEN pg.NomeGrupo IN (
                'PERFUMARIA','PERFUME BOT','PERFUMARIA FINA','FRALDAS',
                'FORMULA INFANTIL','ABSORVENTES','PROTETORES'
            ) THEN 'Perfumarias'
            WHEN pg.NomeGrupo IN (
                'CONVENIENCIA','ACESSORIOS','VAREJINHO',
                'CONSIGNADOS','DIVERSOS'
            ) THEN 'Conveniencias'
            ELSE 'OUTROS'
        END
)

SELECT
    Dia,
    ISNULL([Referências e Populares], 0) AS [Referências e Populares],
    ISNULL([Bonificados/Vitaminas], 0) AS [Bonificados/Vitaminas],
    ISNULL([Genericos], 0) AS [Genericos],
    ISNULL([Perfumarias], 0) AS [Perfumarias],
    ISNULL([Conveniencias], 0) AS [Conveniencias],
    ISNULL([OUTROS], 0) AS [OUTROS]

FROM ComprasPorGrupo 
PIVOT (
    SUM(TotalCompra)
    FOR Grupo IN (
        [Referências e Populares],
        [Bonificados/Vitaminas],
        [Genericos],
        [Perfumarias],
        [Conveniencias],
        [OUTROS]
    )
) AS p

ORDER BY Dia;
`;
