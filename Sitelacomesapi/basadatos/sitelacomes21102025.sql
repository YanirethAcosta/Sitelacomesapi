--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-10-21 10:22:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 32787)
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    idproductos integer NOT NULL,
    producto character varying(100) NOT NULL
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 32786)
-- Name: productos_idproductos_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_idproductos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.productos_idproductos_seq OWNER TO postgres;

--
-- TOC entry 4798 (class 0 OID 0)
-- Dependencies: 217
-- Name: productos_idproductos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_idproductos_seq OWNED BY public.productos.idproductos;


--
-- TOC entry 4641 (class 2604 OID 32790)
-- Name: productos idproductos; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN idproductos SET DEFAULT nextval('public.productos_idproductos_seq'::regclass);


--
-- TOC entry 4792 (class 0 OID 32787)
-- Dependencies: 218
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (idproductos, producto) FROM stdin;
1	papa
2	zanahoria
3	Tomate
11	Guayaba Dulce
12	mora
13	pera
\.


--
-- TOC entry 4799 (class 0 OID 0)
-- Dependencies: 217
-- Name: productos_idproductos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_idproductos_seq', 14, true);


--
-- TOC entry 4643 (class 2606 OID 32792)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (idproductos);


--
-- TOC entry 4645 (class 2606 OID 32794)
-- Name: productos productos_producto_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_producto_key UNIQUE (producto);


-- Completed on 2025-10-21 10:22:33

--
-- PostgreSQL database dump complete
--

